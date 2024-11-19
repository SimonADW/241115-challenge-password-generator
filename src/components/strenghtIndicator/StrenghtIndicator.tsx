import style from "./StrengthIndicator.module.css";

type StrengthIndicatorProps = {
	passwordStrength: number;
};

/** COMPONENT RENDERS STRENGTH-INDICATION CARD, TAKES IS LEVEL OF STRENGTH 0-4 */
const StrenghtIndicator = ({ passwordStrength }: StrengthIndicatorProps) => {
	const strengthValues = ["WEAK", "MEDIUM", "GOOD", "STRONG"];

	// Function to return respective indicator styles
	const returnIndicatorStyles = (strength: number) => {
		if (strength === 0) {
			return { borderColor: "var(--color-strength-0)" };
		} else {
			return {
				borderColor: `var(--color-strength-${strength})`,
				backgroundColor: `var(--color-strength-${strength})`,
			};
		}
	};

	return (
		<div className={style.strengthIndicatorSection}>
			<p>STRENGTH</p>
			<div className={style.strengthIndicatorsContainer}>
				{strengthValues[passwordStrength - 1]}
				{Array.from({ length: 4 }).map((_, index) => {
					return (
						<div
							key={index}
							className={style.strengthIndicator}
							style={
								index < passwordStrength
									? returnIndicatorStyles(passwordStrength)
									: {}
							}
						></div>
					);
				})}
			</div>
		</div>
	);
};

export default StrenghtIndicator;
