export default function CustomDescription({ label, data, input, value, onChange }) {

    return (
        <div className="description">
            <p className="label">
                {label && label} {data && data}
            </p>
            {input && <input defaultValue={value} value={value} onChange={onChange} />}
        </div>
    )
}