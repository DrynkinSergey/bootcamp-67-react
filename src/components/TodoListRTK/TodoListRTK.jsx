import { AddForm } from './AddForm'
import { List } from './List'
import { Filter } from './Filter'
import { UserForm } from './UserForm'
export const TodoListRTK = () => {
	return (
		<section>
			<UserForm />
			<AddForm />
			<Filter />
			<List />
		</section>
	)
}
