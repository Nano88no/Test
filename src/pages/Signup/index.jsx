import React, { useState } from 'react'
import LoginPage from '@/pages/login/Login'
import SignUpForm from '@/pages/login/SignUpForm.jsx'
import { useEffect } from 'react'
import { useRef } from 'react'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Global/NavbarGlobal'

import LayoutGlobal from '@/components/Layout/LayoutGlobal'
import {
  BrowserRouter,
  RouterProvider,
  Router,
  Routes,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

import { createRoot } from 'react-dom/client'

function App() {
  return <SignUpForm> </SignUpForm>
}
export default App
