import SubwayMakerStyles from '../styles/subwayMakerStyles'
import { Form, Field, FormSpy } from 'react-final-form';
//import createDecorators from 'final-form-focus'

const onSubmit = values => console.log(values)
const isChecked = isChecked => isChecked ? undefined : 'Required'

const SubwayMaker = () => {
    return (
        <SubwayMakerStyles>
            <h1> Lets make your veg subway</h1>
            <Form onSubmit={onSubmit} render={({ handleSubmit, form, submitting, pristine, reset }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Select Your Bread</label>
                        <div>
                            <Field
                                name="breadChoice"
                                validate={isChecked}
                                component="select"
                                subscription={{
                                    value: true,
                                    touched: true,
                                    active: true,
                                    error: true
                                }}
                            >
                                <option value="Oregano">Oregano</option>
                                <option value="Multigrain">Multigrain</option>
                                <option value="white">White</option>
                                <option value="Garlic">Oregano</option>
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label>Select your Subway Type </label>
                        <div>
                            <label>
                                <Field
                                    name="filling"
                                    component="input"
                                    type="radio"
                                    value="Aloo Patty"
                                    subscription={{
                                        touched: true,
                                        active: true,
                                        error: true,
                                        value: true,
                                    }}
                                />
                                Aloo Patty
                            </label>
                            <label>
                                <Field
                                    name="filling"
                                    component="input"
                                    type="radio"
                                    value="Green Veggies"
                                    subscription={{
                                        value: true,
                                        touched: true,
                                        active: true,
                                        error: true
                                    }}
                                />
                                Green Veggies
                            </label>
                            <label>
                                <Field
                                    name="filling"
                                    component="input"
                                    type="radio"
                                    value="Sabudana"
                                    subscription={{
                                        value: true,
                                        touched: true,
                                        active: true,
                                        error: true
                                    }}
                                />
                                Sabudana
                            </label>
                            <label>
                                <Field
                                    name="filling"
                                    component="input"
                                    type="radio"
                                    value="Veg Skeeh Kabab"
                                    subscription={{
                                        value: true,
                                        touched: true,
                                        active: true,
                                        error: true
                                    }}
                                />
                                Veg Skeeh Kabab
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Select your Veggies</label>
                        <div>
                            <label>
                                <Field
                                    name="vegitables"
                                    component="input"
                                    type="checkbox"
                                    value="Onions"
                                />{' '}
                                Onions
                            </label>
                            <label>
                                <Field
                                    name="vegitables"
                                    component="input"
                                    type="checkbox"
                                    value="Lettuce"

                                />{' '}
                                Lettuce
                            </label>
                            <label>
                                <Field
                                    name="vegitables"
                                    component="input"
                                    type="checkbox"
                                    value="Tomatos"

                                />{' '}
                                Tomatos
                            </label>
                            <label>
                                <Field
                                    name="vegitables"
                                    component="input"
                                    type="checkbox"
                                    value="Olives"

                                />{' '}
                                Olives
                            </label>
                            <label>
                                <Field
                                    name="vegitables"
                                    component="input"
                                    type="checkbox"
                                    value="Pickles"
                                />{' '}
                                Pickles
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Select your sauces</label>
                        <div>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="Mayo"
                                />{' '}
                                    Myonise
                                </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="Sweet Onions"
                                />{' '}
                                    Sweet Onion
                                </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="Mustard"
                                />{' '}
                                    Mustard
                                </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="Honey Mustard"
                                />{' '}
                                    Honey Mustard
                                </label>
                            <label>
                                <Field
                                    name="sauces"
                                    component="input"
                                    type="checkbox"
                                    value="Mint"
                                />{' '}
                                    Mint Myonise
                                </label>
                        </div>
                    </div>
                    <button type="submit" disabled={submitting || pristine}>Make my Subways</button>
                    <button type="button" onClick={form.reset}>Reset</button>
                    <FormSpy>
                        {({ values }) => <pre>{JSON.stringify(values, undefined, 2)}</pre>}
                    </FormSpy>
                </form>
            )} />
        </SubwayMakerStyles>
    )
}

export default SubwayMaker