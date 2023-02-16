export default function DragonDescription({ label, data, input, value, onChange }) {

    return (
        <div className="description">
            <p className="label">
                {label && label} {data && data}
            </p>
            {input && <input value={value} onChange={onChange} />}
        </div>
    )
}