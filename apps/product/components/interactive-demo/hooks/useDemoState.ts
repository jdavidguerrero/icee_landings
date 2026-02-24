'use client'

import { useState, useCallback } from 'react'
import { type CartItem, type Product, TAX_RATE } from '../data/demo-products'

export type DemoScreen = 'catalog' | 'modifiers' | 'cart' | 'payment' | 'confirmation'

export interface DemoState {
  currentScreen: DemoScreen
  cart: CartItem[]
  selectedProduct: Product | null
  selectedModifiers: number[]
  quantity: number
}

const calcTotals = (cart: CartItem[]) => {
  const subtotal = cart.reduce((sum, item) => {
    return sum + (item.product.price + item.modifierTotal) * item.quantity
  }, 0)
  const tax = subtotal * TAX_RATE
  const total = subtotal + tax
  return { subtotal, tax, total }
}

export function useDemoState() {
  const [state, setState] = useState<DemoState>({
    currentScreen: 'catalog',
    cart: [],
    selectedProduct: null,
    selectedModifiers: [],
    quantity: 1,
  })

  const openModifiers = useCallback((product: Product) => {
    setState(s => ({
      ...s,
      currentScreen: 'modifiers',
      selectedProduct: product,
      selectedModifiers: [],
      quantity: 1,
    }))
  }, [])

  const toggleModifier = useCallback((modifierId: number) => {
    setState(s => ({
      ...s,
      selectedModifiers: s.selectedModifiers.includes(modifierId)
        ? s.selectedModifiers.filter(id => id !== modifierId)
        : [...s.selectedModifiers, modifierId],
    }))
  }, [])

  const setQuantity = useCallback((qty: number) => {
    setState(s => ({ ...s, quantity: Math.max(1, qty) }))
  }, [])

  const addToCart = useCallback((modifierTotal: number) => {
    setState(s => {
      if (!s.selectedProduct) return s
      const existing = s.cart.findIndex(i => i.product.id === s.selectedProduct!.id)
      let newCart: CartItem[]
      if (existing >= 0) {
        newCart = s.cart.map((item, idx) =>
          idx === existing
            ? { ...item, quantity: item.quantity + s.quantity, selectedModifiers: s.selectedModifiers, modifierTotal }
            : item
        )
      } else {
        newCart = [
          ...s.cart,
          { product: s.selectedProduct!, quantity: s.quantity, selectedModifiers: s.selectedModifiers, modifierTotal },
        ]
      }
      return { ...s, currentScreen: 'catalog', cart: newCart, selectedProduct: null }
    })
  }, [])

  const openCart = useCallback(() => {
    setState(s => ({ ...s, currentScreen: 'cart' }))
  }, [])

  const closeCart = useCallback(() => {
    setState(s => ({ ...s, currentScreen: 'catalog' }))
  }, [])

  const updateCartQty = useCallback((productId: number, delta: number) => {
    setState(s => {
      const newCart = s.cart
        .map(item => item.product.id === productId ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
      return { ...s, cart: newCart }
    })
  }, [])

  const startPayment = useCallback(() => {
    setState(s => ({ ...s, currentScreen: 'payment' }))
  }, [])

  const confirmPayment = useCallback(() => {
    setState(s => ({ ...s, currentScreen: 'confirmation' }))
  }, [])

  const cancelPayment = useCallback(() => {
    setState(s => ({ ...s, currentScreen: 'cart' }))
  }, [])

  const resetDemo = useCallback(() => {
    setState({
      currentScreen: 'catalog',
      cart: [],
      selectedProduct: null,
      selectedModifiers: [],
      quantity: 1,
    })
  }, [])

  const totals = calcTotals(state.cart)
  const cartCount = state.cart.reduce((sum, i) => sum + i.quantity, 0)

  return {
    state,
    cartCount,
    totals,
    openModifiers,
    toggleModifier,
    setQuantity,
    addToCart,
    openCart,
    closeCart,
    updateCartQty,
    startPayment,
    confirmPayment,
    cancelPayment,
    resetDemo,
  }
}
