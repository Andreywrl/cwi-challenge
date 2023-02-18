import { Field } from "formik"

export default function LoginField({ props, placeholder, user, password }) {

    return (
        <>
            <Field className="field"
                name={(user && 'user') || (password && 'password')}
                type={(password && 'password')}
                autoComplete="on"
                placeholder={placeholder} />
            {
                user ?
                    props.errors.user && props.touched.user ?
                        <div className="warning">
                            {props.errors.user}
                        </div>
                        : null
                    :
                    props.errors.password && props.touched.password ?
                        <div className="warning">
                            {props.errors.password}
                        </div>
                        : null
            }
        </>
    )
}