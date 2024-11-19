import { useEffect, useRef, useState } from "react";
import style from "./ClipBoardButton.module.css";
import { FaRegCopy } from "react-icons/fa";

type ClipBoardButtonProps = {
	generatedPassword: string;
}

/** COMPONENT TO RENDER COPY TO CLIPBOARD BUTTON, AND DISPLAY CONFIRMATION FOR 1 SEC */
const ClipBoardButton = ({generatedPassword}: ClipBoardButtonProps) => {
	const [isCopyMessageVisible, setIsCopyMessageVisible] = useState(false)
	const timeoutRef = useRef<null | number>(null);

	const handleCopyToClipboard = ()=> {
		navigator.clipboard.writeText(generatedPassword);

		// Display copied confirmation for one second
		setIsCopyMessageVisible(true);
		timeoutRef.current = setTimeout(()=> {
			setIsCopyMessageVisible(false);	
		}, 1000)
	}

	// Clean up timeout
	useEffect(()=> {
		return ()=> {
			if(timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
	},[]);

  return (
	<>
		<button type='button' onClick={()=> handleCopyToClipboard() }>
			<FaRegCopy className={style.copyIcon} />
			{isCopyMessageVisible && <p className={style.copiedMessage}>Copied <br />to clipboard!</p>}
		</button>		
	</>
  )
}

export default ClipBoardButton