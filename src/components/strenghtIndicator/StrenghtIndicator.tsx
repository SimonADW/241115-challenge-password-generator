import style from './StrengthIndicator.module.css';
import type { Strength } from '../formSection/FormSection';

type StrengthIndicatorProps = {
  strength: Strength;
};

/** COMPONENT RENDERS STRENGTH-INDICATION CARD, TAKES IS LEVEL OF STRENGTH 0-4 */
const StrenghtIndicator = ({strength}: StrengthIndicatorProps) => {

  // FUNCTION TO RETURN RESPECTIVE INDICATOR STYLES
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
        return <div key={index} className={style.strengthIndicator} style={index < strength ? returnIndicatorStyles(strength): {}}></div>
      })}
   
    </div>    
  </div>
  )
}

export default StrenghtIndicator