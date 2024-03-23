import styles from './Button.module.css'

interface Props {
  children: string
  onClick?: () => void
  color?: 'Primary' | 'Secondary' | 'Error'
}

const Button = ({ children, onClick, color = 'Primary' }: Props) => {
  //console.log(Object.entries(styles).map(([key,value])=> `${key}: ${value}`))

  return (
    <div>

    <button className={[styles.btn, styles['btn' + color]].join(' ')} onClick={onClick}>
      {children}
    </button>
    </div>
  )
}

export default Button
