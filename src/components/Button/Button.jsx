import styled from 'styled-components';
import GreenArrow from 'assets/GreenArrow.svg';
import RedArrow from 'assets/RedArrow.svg';


const Btn = styled.button`
    /* width: 100%;
    height: 46px;
    border: 1px solid rgba(233, 233, 233, 1);
    border-radius: 10px;
    background: white; */
    width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${props => props.textColor};
  color: ${props => props.fontSize};
    img{
        margin-right: 10px;
    }
;`


// export const Button = ({ percent, children }) => {
//     return <Btn percent={percent}>
//         <img src={ percent > 0 ? GreenArrow : RedArrow} alt='arr'></img> {Math.abs(percent)}% {children}
//         </Btn>
// }

export const Button = ({ width, height, textColor, bgColor, boderColor, percent, fontSize, borderRadius, children, ...rest }) => {
    return <Btn
        percent={percent}
        width={width}
        height={height}
        textColor={textColor}
        bgColor={bgColor}
        boderColor={boderColor}
        fontSize={fontSize}
        borderRadius={borderRadius}
        {...rest}
    >
        <img src={percent > 0 ? GreenArrow : RedArrow} alt="arr"></img> {Math.abs(percent)}% {children}
    </Btn>
}



Button.defaultProps = {
    bgColor: '#FFFFFF',
    textColor: '#5429FF',
    width: 128,
    height: 46,
    borderRadius: '10px',
    fontSize: 16,
    borderColor: '#a59e9e',

}
    ;