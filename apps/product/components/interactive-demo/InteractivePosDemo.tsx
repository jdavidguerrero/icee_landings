'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDemoState, type DemoScreen } from './hooks/useDemoState'
import { DEMO_MODIFIERS } from './data/demo-products'
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
  const [tourActive, setTourActive] = useState(true)

  const modifierTotal = DEMO_MODIFIERS
    .filter(m => state.selectedModifiers.includes(m.id))
    .reduce((s, m) => s + m.price, 0)

  const renderScreen = () => {
    switch (state.currentScreen) {
      case 'catalog':
        return (
          <CatalogScreen
            cartCount={cartCount}
            onProductTap={demo.openModifiers}
            onCartTap={demo.openCart}
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
            onAdd={() => demo.addToCart(modifierTotal)}
            onBack={() => demo.closeCart()}
            showTourHint={tourActive}
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
            onCheckout={demo.startPayment}
            onAddMore={demo.closeCart}
            showTourHint={tourActive}
          />
        )
      case 'payment':
        return (
          <PaymentNfcScreen
            total={totals.total}
            onConfirm={demo.confirmPayment}
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
          screen={state.currentScreen}
          onDismiss={() => setTourActive(false)}
        />
      )}
    </div>
  )
}
