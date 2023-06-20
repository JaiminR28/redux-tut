import { Fragment, useState } from "react";
import {
	useAddAccountMutation,
	useGetAccountsQuery,
	useDeleteAccountMutation,
	useUpdateAccountMutation,
} from "../api/adminslice";

function Admin() {
	const [value, setValue] = useState(0);
	const [update, setUpdate] = useState(0);
	const { data, error, isLoading } = useGetAccountsQuery();
	const [addAccount, response] = useAddAccountMutation();
	const [deleteAccount, delResponse] = useDeleteAccountMutation();
	const [updateAccount] = useUpdateAccountMutation();
	return (
		<div className="card">
			<div className="container">
				<h4>
					<b>Admin Component</b>
				</h4>
				{data &&
					data.map((account) => (
						<div className="accountDetails" key={account.id}>
							<p>
								{account.id} : {account.amount}
							</p>
							<button onClick={() => deleteAccount(account.id)}>
								Delete Account
							</button>
							<button
								onClick={() =>
									updateAccount({
										id: account.id,
										amount: update,
									})
								}
							>
								update Account
							</button>
							<input
								type="number"
								placeholder="Enter the amount in account"
								onChange={(e) => setUpdate(+e.target.value)}
							/>
						</div>
					))}
				<input
					type="number"
					placeholder="Enter the amount in account"
					onChange={(e) => setValue(+e.target.value)}
				/>
				<button onClick={() => addAccount(value, data.length + 1)}>
					Add Account
				</button>
			</div>
		</div>
	);
}

export default Admin;
