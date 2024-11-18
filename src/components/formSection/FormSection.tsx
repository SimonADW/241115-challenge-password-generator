import { ChangeEvent, FormEvent, useState } from 'react';
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

const FormSection = () => {
	const [generatedPassword, setGeneratedPassword] = useState("");
	const [formValues, setFormValues] = useState({
		charLength: 5,
		uppercase: true,
		lowercase: true,
		numbers: true, 
		symbols: true
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>)=> {
		const {name, value, checked } = event.target;
		
		if(name === "charLength") {
			setFormValues((prev)=> ({...prev, [name]: Number(value)}))			
		} else {
			setFormValues((prev)=> ({...prev, [name]: checked}))
		}
	}

	const handleGenerate = (event: FormEvent)=> {
		event.preventDefault()
		console.log(formValues);		
	}
	


  return (
	<form className={style.formContainer} onSubmit={(e)=>handleGenerate(e)}>
		<section className={style.textInputSection}>
			<div className={style.passwordDisplay}>{generatedPassword}
			</div>
			<button>
				<FaRegCopy className={style.copyIcon} />
			</button>
		</section>

		<section className={style.formMainSection}>
			<div className={style.charLengthHeader}>
				<label htmlFor="charLength">Character lenght</label>
				<div className={style.charLength}>{formValues.charLength}</div>
			</div>

			<input type="range" name='charLength' id='charLength' min={0} max={20} step={1} value={formValues.length} onChange={(e)=>handleChange(e)}/>
			<label htmlFor="uppercase">
				<input type="checkbox" name='uppercase' id='uppercase' checked={formValues.upper} onChange={(e)=>handleChange(e)}/>
				Include Uppercase Letters
			</label>

			<label htmlFor="lowercase">
				<input type="checkbox" name='lowercase' id='lowercase' checked={formValues.lower} onChange={(e)=>handleChange(e)}/>
				Include Lowercase Letters
			</label>

			<label htmlFor="numbers">
				<input type="checkbox" name='numbers' id='numbers' checked={formValues.numbers} onChange={(e)=>handleChange(e)}/>
				Include Numbers
			</label>

			<label htmlFor="symbols">
				<input type="checkbox" name='symbols' id='symbols' checked={formValues.symbols} onChange={(e)=>handleChange(e)}/>
				Include Symbols
			</label>

			<StrenghtIndicator strength={3} />

			<button>GENERATE →</button>
		</section>
	</form>
  )
}

export default FormSection