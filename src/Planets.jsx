import React from 'react';

const Planets = (props) => {
      let planet;
      let size;
      let outputPlanet;

      props.planet ? planet = props.planet : planet = "earth";
      props.size ? size = props.size : size = "250px";
      
      console.log(size)


        function Mercury (props) { 
          return (
            <svg viewBox="0 0 25.79 25.79" width={props.size} height={props.size}> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <circle style={{ fill: "#bfb494" }} cx="12.89" cy="12.89" r="12.89"></circle> <path style={{ fill: "#a0916b" }} d="M18.6,3.76A10.77,10.77,0,0,1,4.2,19.25,10.77,10.77,0,1,0,18.6,3.76Z"></path> <path style={{ fill: "#a0916b" }} d="M9.92,7.88A1.92,1.92,0,1,1,8,6,1.92,1.92,0,0,1,9.92,7.88Z"></path> <circle style={{ fill: "#a0916b" }} cx="9.63" cy="12.03" r="0.87"></circle> <circle style={{ fill: "#a0916b" }} cx="5.25" cy="13.36" r="1.33"></circle> <path style={{ fill: "#a0916b" }} d="M10.76,16.44a.82.82,0,0,1-.82.82.82.82,0,0,1-.81-.82.81.81,0,0,1,.81-.81A.82.82,0,0,1,10.76,16.44Z"></path> <circle style={{ fill: "#a0916b" }} cx="15.21" cy="12.44" r="1.28"></circle> <path style={{ fill: "#a0916b" }} d="M16.3,7.4a1.19,1.19,0,1,1-1.19-1.18A1.19,1.19,0,0,1,16.3,7.4Z"></path> <path style={{ fill: "#a0916b" }} d="M13.12,3.88a.82.82,0,0,1-.81.82.82.82,0,0,1-.82-.82.82.82,0,0,1,.82-.81A.81.81,0,0,1,13.12,3.88Z"></path> </g> </g> </svg>  
          )
        };

        function Venus (props) { 
          return (
            <svg viewBox="0 0 35.26 35.26" width={props.size} height={props.size}> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <circle style={{ fill: "#e17e7a" }} cx="17.63" cy="17.63" r="17.63" transform="translate(-2.6 32.21) rotate(-80.78)" ></circle> <path style={{ fill: "#d15e5e" }} d="M25.43,5.14a14.73,14.73,0,0,1-11.9,23.41,14.59,14.59,0,0,1-7.79-2.24A14.72,14.72,0,1,0,25.43,5.14Z" ></path> </g> </g> </svg>  
          )
        };

        function Earth (props) { 
          return (
            <svg viewBox="0 0 38.67 39.34" width={props.size} height={props.size}><circle style={{ fill: "#6fc2f1" }} cx="18.45" cy="20.89" r="18.45" transform="translate(-6.12 34.05) rotate(-76.72)"></circle><path style={{ fill: "#60af3d" }} d="M30.61,11.43h0l2.69.33.5-1.1a18.47,18.47,0,0,0-11.1-7.72L19.93,6.42l2.33,4,5.41,2.11,1.14-.42a15.49,15.49,0,0,0-2.2-4.28A15.71,15.71,0,0,1,30.61,11.43Z"></path><path style={{ fill: "#60af3d" }} d="M11.88,16.24l2.78-5.39-.75-3L14.66,6l-.94-2.92a18.48,18.48,0,0,0-11.06,8.3l.42.56,1.81.67L7.14,16.8Z"></path><path style={{ fill: "#60af3d" }} d="M29.56,17.4l-1.51-1.16H25l-3.68.93-2.91-1.43-3.19,1.88V22l2.41,1.85.38,1.28,3.08,1.13.59,4.06A15.37,15.37,0,0,0,29.56,17.4Z"></path><path style={{ fill: "#60af3d" }} d="M24.43,35.1l1,1.52,4.87-4.09-.21-1.59A15.44,15.44,0,0,1,24.43,35.1Z"></path><path style={{ fill: "#4468c2" }} d="M21.88,31.46l-.16-1.13A15.38,15.38,0,0,1,6,30,15.44,15.44,0,0,0,24.43,35.1l-1-1.53Z"></path><path style={{ fill: "#4468c2" }} d="M30.13,22.36l-.58,4.26.58,4.32a15.4,15.4,0,0,0,.48-19.51l-1.8.66a15.34,15.34,0,0,1,.77,4.81c0,.17,0,.33,0,.5l1.87,1.43Z"></path><path style={{ fill: "#335b4b" }} d="M26.61,7.81a15.49,15.49,0,0,1,2.2,4.28l1.8-.66A15.71,15.71,0,0,0,26.61,7.81Z"></path><path style={{ fill: "#335b4b" }} d="M30.13,30.94l-.58-4.32.58-4.26,1.3-3.53L29.56,17.4a15.37,15.37,0,0,1-7.84,12.93l.16,1.13,1.51,2.11,1,1.53A15.44,15.44,0,0,0,30.13,30.94Z"></path><path style={{ fill: "#d4e0b6" }} d="M38.67,3.26A3.26,3.26,0,1,1,35.41,0,3.26,3.26,0,0,1,38.67,3.26Z"></path></svg> 
          )
        };

        function Mars (props) { 
          return (
          <svg viewBox="0 0 28.12 32.75" width={props.size} height={props.size}> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <circle style={{fill:"#e15d4a"}} cx="13.17" cy="19.58" r="13.17" transform="translate(-8.89 27.99) rotate(-76.96)"></circle> <path style={{fill:"#bd3832"}} d="M19,10.26a11,11,0,0,1-8.88,17.48,10.94,10.94,0,0,1-5.83-1.67A11,11,0,1,0,19,10.26Z"></path> <circle style={{fill:"#bd3832"}} cx="8.73" cy="12.53" r="1.53"></circle> <path style={{fill:"#bd3832"}} d="M11.56,17.92a1.31,1.31,0,1,1-1.3-1.3A1.31,1.31,0,0,1,11.56,17.92Z"></path> <circle style={{fill:"#bd3832"}} cx="14.12" cy="14.77" r="0.7"></circle> <path style={{fill:"#bd3832"}} d="M6.25,16.6a1.13,1.13,0,1,1-1.13-1.13A1.13,1.13,0,0,1,6.25,16.6Z"></path> <circle style={{fill:"#dee7d0"}} cx="12.34" cy="2.08" r="2.08"></circle> <path style={{fill:"#b0a1e3"}} d="M28.12,7.37a2,2,0,1,1-2-2A2,2,0,0,1,28.12,7.37Z"></path> </g> </g> </svg> 
          )
        };

        function Jupiter (props) { 
          return (
            <svg viewBox="0 0 63.19 55.66" width={props.size} height={props.size}><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><circle style={{ fill: "#ecab38" }} cx="31.28"  cy="30.62"  r="25.04" transform="translate(-3.75 56.87) rotate(-81.23)" ></circle> <path style={{ fill: "#d78a2a" }} d="M42.36,12.87a21,21,0,0,1,3.11,6.26h3.29A21,21,0,0,0,42.36,12.87Z" ></path> <path style={{ fill: "#d78a2a" }} d="M46.12,21.92A20.91,20.91,0,0,1,14.39,43,20.83,20.83,0,0,0,19,47.55h2.12A1.4,1.4,0,0,1,22.53,49a1.36,1.36,0,0,1-.14.6,20.87,20.87,0,0,0,15.87.79H25.93a1.4,1.4,0,0,1,0-2.79H43.56a21.13,21.13,0,0,0,4.17-4H43.28a1.4,1.4,0,1,1,0-2.79h6.3a20.58,20.58,0,0,0,2.5-7.89H48.16a1.4,1.4,0,0,1,0-2.79h4a20.77,20.77,0,0,0-1.89-8.15Z" ></path> <path style={{ fill: "#d78a2a" }} d="M30.54,13.58a1.39,1.39,0,0,0-1.39-1.39H14.34A23.67,23.67,0,0,0,11.74,15H29.15A1.4,1.4,0,0,0,30.54,13.58Z" ></path> <path style={{ fill: "#d78a2a" }} d="M41,13.58a1.39,1.39,0,0,0-1.39-1.39H35.4a1.4,1.4,0,0,0,0,2.79h4.25A1.4,1.4,0,0,0,41,13.58Z" ></path> <path style={{ fill: "#d78a2a" }} d="M44.82,13.58A1.4,1.4,0,0,0,46.21,15h4.62a23.67,23.67,0,0,0-2.6-2.79h-2A1.39,1.39,0,0,0,44.82,13.58Z" ></path> <path style={{ fill: "#d78a2a" }} d="M35.87,19.13H17.56a1.4,1.4,0,0,0,0,2.79H35.87a1.4,1.4,0,0,0,0-2.79Z" ></path> <path style={{ fill: "#d78a2a" }} d="M51,21.92a1.4,1.4,0,0,0,0-2.79H48.76a20,20,0,0,1,1.54,2.79Z" ></path> <path style={{ fill: "#d78a2a" }} d="M41.71,19.13a1.4,1.4,0,0,0,0,2.79h4.41a20.19,20.19,0,0,0-.65-2.79Z" ></path> <path style={{ fill: "#c1721b" }} d="M48.76,19.13H45.47a20.19,20.19,0,0,1,.65,2.79H50.3A20,20,0,0,0,48.76,19.13Z" ></path> <path style={{ fill: "#d78a2a" }} d="M12.51,20.53a1.4,1.4,0,0,0-1.4-1.4H9A24.84,24.84,0,0,0,7.8,21.92h3.31A1.4,1.4,0,0,0,12.51,20.53Z" ></path> <path style={{ fill: "#d78a2a" }} d="M23.82,38.31c5.55,0,10-2.3,11.08-5.45h5.68a1.4,1.4,0,0,0,0-2.79H34.9c-1-3.14-5.53-5.44-11.08-5.44s-10,2.3-11.09,5.44H6.26c0,.19,0,.37,0,.55,0,.76,0,1.5.11,2.24h6.38C13.77,36,18.26,38.31,23.82,38.31Zm0-10.89c5,0,8.52,2.13,8.52,4s-3.5,4.05-8.52,4.05-8.53-2.13-8.53-4.05S18.79,27.42,23.82,27.42Z" ></path> <path style={{ fill: "#d78a2a" }} d="M56.31,30.07H52.19c0,.19,0,.37,0,.55a20.6,20.6,0,0,1-.12,2.24h4.14c.07-.74.1-1.48.1-2.24C56.32,30.44,56.32,30.26,56.31,30.07Z" ></path> <path style={{ fill: "#c1721b" }} d="M46.77,31.47a1.39,1.39,0,0,0,1.39,1.39h3.92a20.6,20.6,0,0,0,.12-2.24c0-.18,0-.36,0-.55h-4A1.4,1.4,0,0,0,46.77,31.47Z"></path> <path style={{ fill: "#d78a2a" }} d="M14,39.53a1.4,1.4,0,0,0-1.4-1.39H7.39a27.66,27.66,0,0,0,1.07,2.79h4.13A1.4,1.4,0,0,0,14,39.53Z" ></path> <path style={{ fill: "#d78a2a" }} d="M21.92,43.54h9.76a1.4,1.4,0,1,0,0-2.79H21.92a1.4,1.4,0,0,0,0,2.79Z" ></path> <path style={{ fill: "#d78a2a" }} d="M47.73,43.54h5a23.78,23.78,0,0,0,1.45-2.79h-4.6A20.14,20.14,0,0,1,47.73,43.54Z" ></path> <path style={{ fill: "#c1721b" }} d="M41.88,42.15a1.4,1.4,0,0,0,1.4,1.39h4.45a20.14,20.14,0,0,0,1.85-2.79h-6.3A1.4,1.4,0,0,0,41.88,42.15Z" ></path> <path style={{ fill: "#d78a2a" }} d="M44.59,50.34a1.4,1.4,0,0,0,0-2.79h-1a20.65,20.65,0,0,1-5.3,2.79Z" ></path> <path style={{ fill: "#c1721b" }} d="M24.54,49a1.39,1.39,0,0,0,1.39,1.39H38.26a20.65,20.65,0,0,0,5.3-2.79H25.93A1.4,1.4,0,0,0,24.54,49Z" ></path> <path style={{ fill: "#d78a2a" }} d="M22.39,49.55a20.36,20.36,0,0,1-3.37-2H12.84a25.73,25.73,0,0,0,3,2.79h5.28A1.39,1.39,0,0,0,22.39,49.55Z" ></path> <path style={{ fill: "#c1721b" }} d="M21.14,47.55H19a20.36,20.36,0,0,0,3.37,2,1.36,1.36,0,0,0,.14-.6A1.4,1.4,0,0,0,21.14,47.55Z" ></path><circle style={{ fill: "#d4e0b6" }} cx="3.12" cy="16" r="3.12"></circle><path style={{ fill: "#d4e0b6" }} d="M44.37,2.25A2.25,2.25,0,1,1,42.12,0,2.25,2.25,0,0,1,44.37,2.25Z"></path><path style={{ fill: "#d4e0b6" }} d="M59.53,12.72A2.23,2.23,0,1,1,57.3,10.5,2.23,2.23,0,0,1,59.53,12.72Z"></path><path style={{ fill: "#d4e0b6" }} d="M63.19,26.89a2.27,2.27,0,1,1-2.27-2.26A2.27,2.27,0,0,1,63.19,26.89Z"></path></g></g></svg> 
          )
        };

        function Saturn (props) { 
          return (
            <svg viewBox="0 0 71.87 35.26" width={props.size} height={props.size}> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <circle style={{ fill: "#c7bc9e" }} cx="35.93" cy="17.63" r="17.63" transform="translate(10.64 48.65) rotate(-76.94)" ></circle> <path style={{ fill: "#b5a57d" }} d="M43.73,5.14A14.73,14.73,0,0,1,31.84,28.55,14.6,14.6,0,0,1,24,26.31,14.72,14.72,0,1,0,43.73,5.14Z" ></path> <path style={{ fill: "#dfe6cd" }} d="M71.83,11.11c-.6-2.81-8.94-3.58-20.67-2.36a19.26,19.26,0,0,1,.9,1.75c5.48-.36,9.07,0,9.34,1.28s-2.8,3-7.86,4.91a128.68,128.68,0,0,1-17,4.75,129.62,129.62,0,0,1-17,2.56c-5.65.4-9.38,0-9.65-1.25s3-3.18,8.46-5.14a15.67,15.67,0,0,1,.12-1.94C7,19.36-.57,23.53,0,26.38S9.66,30,22.13,28.59C26.84,28,32,27.19,37.48,26c5.63-1.2,10.9-2.6,15.54-4.07C64.73,18.24,72.45,14,71.83,11.11Z" ></path> <path style={{ fill: "#b5a57d" }} d="M34.12,12.18a4.83,4.83,0,1,1-4.83-4.82A4.82,4.82,0,0,1,34.12,12.18Z" ></path> </g> </g> </svg> 
          )
        };

        function Uranus (props) { 
          return (
          <svg viewBox="0 0 30.23 30.23" width={props.size} height={props.size}> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <circle style={{ fill: "#7bcce0" }} cx="15.12" cy="15.12" r="15.12" transform="translate(-3.05 26.38) rotate(-76.8)" ></circle> <path style={{ fill: "#5b9cb8" }} d="M21.8,4.4A12.63,12.63,0,0,1,11.6,24.48a12.5,12.5,0,0,1-6.68-1.92A12.63,12.63,0,1,0,21.8,4.4Z" ></path> </g> </g> </svg> 
          )
        };

        function Neptune (props) { 
          return (
          <svg viewBox="0 0 44.42 38.07" width={props.size} height={props.size}> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <circle style={{ fill: "#b0a1e3" }} cx="23.3" cy="20.44" r="17.63" ></circle> <path style={{ fill: "#6e5cb4" }} d="M31.1,8A14.73,14.73,0,0,1,11.41,29.13,14.73,14.73,0,1,0,31.1,8Z" ></path> <path style={{ fill: "#d4e0b6" }} d="M9.76,1.74A1.74,1.74,0,1,1,8,0,1.74,1.74,0,0,1,9.76,1.74Z" ></path> <path style={{ fill: "#b0a1e3" }} d="M3.49,19.82a1.75,1.75,0,1,1-1.75-1.75A1.74,1.74,0,0,1,3.49,19.82Z" ></path> <path style={{ fill: "#95cfe4" }} d="M5.67,28.61a1.74,1.74,0,1,1-1.74-1.74A1.74,1.74,0,0,1,5.67,28.61Z" ></path> <path style={{ fill: "#95cfe4" }} d="M39.27,5.33a1.75,1.75,0,1,1-1.75-1.75A1.74,1.74,0,0,1,39.27,5.33Z" ></path> <path style={{ fill: "#d4e0b6" }} d="M44.42,12.28a1.75,1.75,0,1,1-1.74-1.74A1.74,1.74,0,0,1,44.42,12.28Z" ></path> </g> </g> </svg> 
          )
        };


    


console.log(Earth)

    switch (planet) {
      case "earth":
      return ( <Earth size={size} />)
      break;
      case "mercury":
      return ( <Mercury size={size} />)
      break;
      case "venus":
      return ( <Venus size={size} />)
      break;
      case "mars":
      return ( <Mars size={size} />)
      break;
      case "jupiter":
      return ( <Jupiter size={size} />)
      break;
      case "saturn":
      return ( <Saturn size={size} />)
      break;
      case "uranus":
      return ( <Uranus size={size} />)
      break;
      case "neptune":
      return ( <Neptune size={size} />)
      break;
    }

    console.log(outputPlanet)

   return (
       <div style={{height:size,width:size}}>
       {outputPlanet}
       </div>
   )
}

export default Planets;