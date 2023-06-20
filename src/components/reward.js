import { increment } from "../reducers/rewardReducer";
import { useDispatch, useSelector } from "react-redux";

function Reward() {
	// const amount = useSelector((state) => state.account.amount);
	const points = useSelector((state) => state.reward.points);
	const dispatch = useDispatch();

	return (
		<div className="card">
			<div className="container">
				<h4>
					<b>Reward Component</b>
				</h4>
				<h3>Total point : {points}</h3>
				<button onClick={() => dispatch(increment())}>
					Increment +
				</button>
			</div>
		</div>
	);
}

export default Reward;
