import styles from './outlinecomponent.module.css'

function OutlineComponent() {
  return (
    <div>
      {/* <h1 className='outline-header'>This is Out line Component</h1> */}
      <h1 className={styles.header}>This is Out line Component</h1>
    </div>
  )
}

export default OutlineComponent
