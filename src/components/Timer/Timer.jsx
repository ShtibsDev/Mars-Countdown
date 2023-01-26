import styles from './Timer.module.scss'

export default function Timer() {

  return (
    <div className={styles.Timer}>
      <div className={styles.TimerValue}>
        <span>{3}</span>
        :
        <span>{16}</span>
      </div>
      <button className={styles.ResetButton}>Reset Timer</button>
    </div>
  )
}