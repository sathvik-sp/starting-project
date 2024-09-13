export default function BtnComp({children, onSelect}){
    return  (
    <li>
        <button onClick={onSelect}> 
            {children}
            </button>
    </li>
    );
}