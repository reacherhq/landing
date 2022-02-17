import React from 'react'
import { theme } from 'react-saasify'
import styles from './styles.module.css'

export const ServiceInputWrapper = ({ children }) => (
  <div className={theme(styles, 'service-form__input-wrapper')}>{children}</div>
)
