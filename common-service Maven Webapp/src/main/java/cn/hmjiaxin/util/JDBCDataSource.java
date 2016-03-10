package cn.hmjiaxin.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCDataSource {
private String driver;
private String url;
private String username;
private String password;

public String getDriver() {
	return driver; 
}
public void setDriver(String driver) {
	try {
		Class.forName(driver);
		this.driver = driver;
	} catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
}
public Connection getConnection() throws SQLException{
	Connection con=DriverManager.getConnection(url,username,password);
	return con;
}
public void close(Connection con){
	try {
		con.close();
	} catch (SQLException e) {
		e.printStackTrace();
	}
}
public String getUrl() {
	return url;
}
public void setUrl(String url) {
	this.url = url;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
}
