import { ChangeEvent, FormEvent, useState } from 'react';
import StrenghtIndicator from '../strenghtIndicator/StrenghtIndicator';
import style from './formSection.module.css';
import { generate } from 'generate-password-browser';
import ClipBoardButton from '../clipBoardButton/ClipBoardButton';
import { formValuesType } from '../utils/types';

const FormSection = () => {
	const [generatedPassword, setGeneratedPassword] = useState("");
	const [error, setError] = useState("")
	const [passwordStrength, setPasswordStrength] = useState(0)
	const [formValues, setFormValues] = useState({
		charLength: 10,
		uppercase: true,
		lowercase: true,
		numbers: true, 
		symbols: true
	});

	  // Function to calc strength based on number of inputs checked
	  const getPasswordStrength = (formValues: formValuesType) => {
		let numberOfChecked = 0;
    
		for (const key in formValues) {
			if (
				key !== "charLength" &&
				formValues[key as keyof formValuesType]
			) {
				numberOfChecked++;
			}
		}
		
		setPasswordStrength(numberOfChecked);
	};
	

	const handleChange = (event: ChangeEvent<HTMLInputElement>)=> {
		const {name, value, checked } = event.target;
		
		if(name === "charLength") {
			setFormValues((prev)=> ({...prev, [name]: Number(value)}))			
		} else {
			setFormValues((prev)=> ({...prev, [name]: checked}))
			setError("");
		}
	}

	const validateForm = ()=> {
		// Check if at least one option is checked
		if(!formValues.lowercase && !formValues.uppercase && !formValues.numbers && !formValues.symbols) {
			setError("Please check at least one option above")
			return
		}		
		return true;
	}

	// Generate password from library: generate-password-browser
	const generatePassword = ()=> {
		const password = generate({
			length: formValues.charLength,
			uppercase: formValues.uppercase,
			lowercase: formValues.lowercase,
			numbers: formValues.numbers, 
			symbols: formValues.symbols
		});
		setGeneratedPassword(password)
	}

	const handleGenerate = (event: FormEvent)=> {
		event.preventDefault()
		if(validateForm()) {
			generatePassword()
			getPasswordStrength(formValues)
		}	
	}

		
  return (
	<form className={style.formContainer} onSubmit={(e)=>handleGenerate(e)}>
		<section className={style.textInputSection}>
			<div className={style.passwordDisplay}>{generatedPassword}
			</div>
			<ClipBoardButton generatedPassword={generatedPassword} />
		</section>

		<section className={style.formMainSection}>
			<div className={style.charLengthHeader}>
				<label htmlFor="charLength">Character lenght</label>
				<div className={style.charLength}>{formValues.charLength}</div>
			</div>

			<input type="range" name='charLength' id='charLength' min={5} max={20} step={1} value={formValues.charLength} onChange={(e)=>handleChange(e)}/>
			<label htmlFor="uppercase">
				<input type="checkbox" name='uppercase' id='uppercase' checked={formValues.uppercase} onChange={(e)=>handleChange(e)}/>
				Include Uppercase Letters
			</label>

			<label htmlFor="lowercase">
				<input type="checkbox" name='lowercase' id='lowercase' checked={formValues.lowercase} onChange={(e)=>handleChange(e)}/>
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

			<p className={style.errorMessage}>{error ?? error}</p>

			<StrenghtIndicator passwordStrength={passwordStrength} />

			<button>GENERATE →</button>
		</section>
	</form>
  )
}

export default FormSection