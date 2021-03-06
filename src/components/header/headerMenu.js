import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { Avatar, Badge, Menu, Dropdown, Icon, Empty } from "antd";
import imgSrc from "../../assets/images/favicon.png";
const HeaderMenu = props => {
	const notifData = [
		{
			title: "Notif One",
			content:
				"Sample text sample text sample text sample text sample text sample text",
			image: imgSrc
		},
		{
			title: "Notif Two",
			content:
				"Sample text sample text sample text sample text sample text sample text",
			image: imgSrc
		},
		{
			title: "Notif Three",
			content:
				"Sample text sample text sample text sample text sample text sample text",
			image: imgSrc
		},
		{
			title: "Notif Four",
			content:
				"Sample text sample text sample text sample text sample text sample text",
			image: imgSrc
		},
		{
			title: "Notif Five",
			content:
				"Sample text sample text sample text sample text sample text sample text",
			image: imgSrc
		}
	];
	// const [notif, setNotif] = useState(notifData)
	const [notif] = useState(notifData);
	const { auth, dispatch } = useContext(AuthContext);
	const onLogout = e => {
		e.preventDefault();
		dispatch({ type: "LOGOUT_SUCCESS", user: auth.user });
		window.localStorage.setItem("auth", false);
		props.history.replace("/login");
	};
	const headerAvatarDropdown = (
		<Menu className="header-avatar-dropdown">
			<Menu.Item key="0">
				<a href="#profile">
					<Icon type="user" />
					<span>Profile</span>
				</a>
			</Menu.Item>
			<Menu.Item key="1">
				<a href="#setting">
					<Icon type="setting" />
					<span>Settings</span>
				</a>
			</Menu.Item>
			<Menu.Item>
				<a href="#mail">
					<Icon type="mail" />
					<span>Messages</span>
				</a>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="3">
				<a onClick={onLogout} href="/logout">
					<Icon type="logout" />
					<span>Logout</span>
				</a>
			</Menu.Item>
		</Menu>
	);
	const headerNotifDropdown = (
		<Menu className="header-notif-dropdown">
			{notif.length ? (
				notif.map((item, index) => {
					return (
						<Menu.Item key={index}>
							<a href={`#notif-${index}`}>
								<Avatar
									src={item.image}
									size={40}
									style={{ backgroundColor: "#d0e8ff" }}
								/>
								<div className="notif-dropdown-content">
									<span>{item.title}</span>
									<p>{item.content.substring(0, 30) + "..."}</p>
								</div>
							</a>
						</Menu.Item>
					);
				})
			) : (
				<Menu.Item className="header-notif-empty">
					<Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						imageStyle={{
							height: 40
						}}
						description={<span>اطلاعیه ای وجود ندارد</span>}
					/>
				</Menu.Item>
			)}
		</Menu>
	);
	return (
		<ul className="header-menu">
			<li>
				<Dropdown overlay={headerAvatarDropdown} trigger={["click"]}>
					<a href="#avatar">
						<Avatar
							icon="user"
							style={{ backgroundColor: "#d0e8ff" }}
							size={38}
						/>
					</a>
				</Dropdown>
			</li>
			<li className="header-menu-notif">
				<Dropdown overlay={headerNotifDropdown} trigger={["click"]}>
					<a href="#notif">
						<Badge count={5}>
							<i className="fal fa-bell"></i>
						</Badge>
					</a>
				</Dropdown>
			</li>
		</ul>
	);
};

export default withRouter(HeaderMenu);
