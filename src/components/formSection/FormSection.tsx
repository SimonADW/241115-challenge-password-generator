import StrenghtIndicator from '../strenghtIndicator/StrenghtIndicator';
import style from './formSection.module.css';
import { FaRegCopy } from "react-icons/fa";

export enum Strength {
	Default = 0,
	Weak = 1,
	Medium = 2,
	Strong = 3,
	VeryStrong = 4,
  }

const formSection = () => {

  return (
	<form className={style.formContainer}>
		<section className={style.textInputSection}>
			<div className={style.passwordDisplay}>368dd564A65dv</div>
			<button>
				<FaRegCopy className={style.copyIcon} />
			</button>
		</section>

		<section className={style.formMainSection}>
			<div className={style.charLengthHeader}>
				<label htmlFor="charLength">Character lenght</label>
				<div className={style.charLength}>10</div>
			</div>

			<input type="range" name='charLength' id='charLength' min={0} max={20} step={1} defaultValue={10} />
			<label htmlFor="uppercase">
				<input type="checkbox" name='uppercase' id='uppercase'/>
				Include Uppercase Letters
			</label>

			<label htmlFor="lowercase">
				<input type="checkbox" name='lowercase' id='lowercase'/>
				Include Lowercase Letters
			</label>

			<label htmlFor="numbers">
				<input type="checkbox" name='numbers' id='numbers'/>
				Include Numbers
			</label>

			<label htmlFor="symbols">
				<input type="checkbox" name='symbols' id='symbols'/>
				Include Symbols
			</label>

			<StrenghtIndicator strength={3} />

			<button>GENERATE →</button>
		</section>
	</form>
  )
}

export default formSection