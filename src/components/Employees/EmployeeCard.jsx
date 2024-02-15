import clsx from 'clsx'
import s from './Employee.module.css'
export const EmployeeCard = ({ id, name, email, bio, skills, isOpenToWork, onDeleteUser, onUpdateUser }) => {
	return (
		// <li className={`${s.userCard} ${isOpenToWork ? s.wantToWork : s.dontWork}   `}>
		<li
			onClick={() => onUpdateUser(id)}
			className={clsx(s.userCard, isOpenToWork ? [s.wantToWork, s.test] : s.dontWork)}
		>
			<h3>{name}</h3>
			<h4>{email}</h4>
			<h5>{bio}</h5>
			<ul className={s.skillList}>
				{skills.map(skill => (
					<li className={s.skillLabel} key={skill}>
						{skill}
					</li>
				))}
			</ul>
			<button onClick={() => onDeleteUser(id)} className={s.btn}>
				Delete
			</button>
		</li>
	)
}
