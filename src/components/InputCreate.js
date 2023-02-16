export default function InputCreate({ label, value, onChange }) {

    return (
        <div className='new-dragon-field'>
            {label && <p className="label">{label}</p>}
            <input type="text" value={value} onChange={onChange} />
        </div>
    )
}