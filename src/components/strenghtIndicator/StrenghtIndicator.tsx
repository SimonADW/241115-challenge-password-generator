import style from './StrengthIndicator.module.css';

type StrengthIndicatorProps = {
  strength: number;
};


const StrenghtIndicator = ({strength}: StrengthIndicatorProps) => {
  const returnIndicatorStyles = (strength: number) => {
    if(strength === 0) {
      return {borderColor: "var(--color-strength-0)"}
    } else {
      return {borderColor: `var(--color-strength-${strength})`, backgroundColor: `var(--color-strength-${strength})`}
    }
  }

  return (
	<div className={style.strengthIndicatorSection}>
    <p>STRENGTH</p>
    <div className={style.strengthIndicatorsContainer}>
      WEAK
      {Array.from({length: 4}).map((_, index)=> {
        return <div className={style.strengthIndicator} style={index < strength ? returnIndicatorStyles(strength): {}}></div>
      })}
   
    </div>    
  </div>
  )
}

export default StrenghtIndicator