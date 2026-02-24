'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDemoState, type DemoScreen } from './hooks/useDemoState'
import { DEMO_MODIFIERS, type Product } from './data/demo-products'
import DeviceFrame from './DeviceFrame'
import CatalogScreen from './screens/CatalogScreen'
import ModifiersSheet from './screens/ModifiersSheet'
import CartScreen from './screens/CartScreen'
import PaymentNfcScreen from './screens/PaymentNfcScreen'
import ConfirmationScreen from './screens/ConfirmationScreen'
import DemoTourBubble from './DemoTourBubble'

// Slide direction based on flow
const getSlideDir = (screen: DemoScreen) => {
  const forwardScreens: DemoScreen[] = ['modifiers', 'cart', 'payment', 'confirmation']
  return forwardScreens.includes(screen) ? 1 : -1
}

export default function InteractivePosDemo() {
  const demo = useDemoState()
  const { state, cartCount, totals } = demo

  // Tour state
  const [tourActive, setTourActive] = useState(true)
  /**
   * tourStep maps the guided onboarding progress (1–6):
   *   1 → catalog initial  — "Toca un producto"
   *   2 → modifiers        — "Personaliza → Toca Agregar"
   *   3 → catalog post-add — "¡Añadido! → Ve al carrito"
   *   4 → cart             — "Tu orden → Toca Cobrar"
   *   5 → payment          — "Cobra con un toque"
   *   6 → confirmation     — "¡Venta completada!" (auto-dismiss)
   */
  const [tourStep, setTourStep] = useState(1)

  const modifierTotal = DEMO_MODIFIERS
    .filter(m => state.selectedModifiers.includes(m.id))
    .reduce((s, m) => s + m.price, 0)

  // ── Wrapped handlers that advance tourStep ──────────────────────────────
  const handleOpenModifiers = useCallback((product: Product) => {
    demo.openModifiers(product)
    setTourStep(2)
  }, [demo])

  const handleAddToCart = useCallback(() => {
    demo.addToCart(modifierTotal)
    setTourStep(3)           // back to catalog: now show "Ve al carrito"
  }, [demo, modifierTotal])

  const handleCartTap = useCallback(() => {
    demo.openCart()
    setTourStep(4)
  }, [demo])

  const handleCheckout = useCallback(() => {
    demo.startPayment()
    setTourStep(5)
  }, [demo])

  const handleConfirmPayment = useCallback(() => {
    demo.confirmPayment()
    setTourStep(6)
  }, [demo])

  // ── Screen renderer ─────────────────────────────────────────────────────
  const renderScreen = () => {
    switch (state.currentScreen) {
      case 'catalog':
        return (
          <CatalogScreen
            cartCount={cartCount}
            onProductTap={handleOpenModifiers}
            onCartTap={handleCartTap}
            showProductHint={tourActive && tourStep === 1}
            showCartHint={tourActive && tourStep === 3}
          />
        )
      case 'modifiers':
        return state.selectedProduct ? (
          <ModifiersSheet
            product={state.selectedProduct}
            selectedModifiers={state.selectedModifiers}
            quantity={state.quantity}
            onToggleModifier={demo.toggleModifier}
            onSetQuantity={demo.setQuantity}
            onAdd={handleAddToCart}
            onBack={demo.closeCart}
            showTourHint={tourActive && tourStep === 2}
          />
        ) : null
      case 'cart':
        return (
          <CartScreen
            cart={state.cart}
            subtotal={totals.subtotal}
            tax={totals.tax}
            total={totals.total}
            onClose={demo.closeCart}
            onUpdateQty={demo.updateCartQty}
            onCheckout={handleCheckout}
            onAddMore={demo.closeCart}
            showTourHint={tourActive && tourStep === 4}
          />
        )
      case 'payment':
        return (
          <PaymentNfcScreen
            total={totals.total}
            onConfirm={handleConfirmPayment}
            onCancel={demo.cancelPayment}
          />
        )
      case 'confirmation':
        return (
          <ConfirmationScreen
            cart={state.cart}
            subtotal={totals.subtotal}
            tax={totals.tax}
            total={totals.total}
            onNewSale={demo.resetDemo}
          />
        )
    }
  }

  const dir = getSlideDir(state.currentScreen)

  return (
    <div className="flex flex-col items-center">
      <DeviceFrame>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={state.currentScreen}
            className="absolute inset-0"
            initial={{ x: dir * 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: dir * -40, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </DeviceFrame>

      {/* Step-by-step tour bubble — appears below device, points up */}
      {tourActive && (
        <DemoTourBubble
          step={tourStep}
          onDismiss={() => setTourActive(false)}
        />
      )}
    </div>
  )
}
