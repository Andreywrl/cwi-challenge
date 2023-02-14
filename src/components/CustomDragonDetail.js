export default function CustomDragonDetail({ data, label }) {

    return (
        <div className='dragon-details-field'>
            <p className="label">{label && label} {data && <span>{data}</span>}</p>
        </div>
    )
};