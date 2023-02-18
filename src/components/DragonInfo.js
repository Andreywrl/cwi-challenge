export default function DragonInfo({ data, label }) {

    return (
        <div className='field'>
            <p className="label">{label && label} {data && <span>{data}</span>}</p>
        </div>
    )
};