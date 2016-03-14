package cn.hmjiaxin.dao.common.Impl;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import cn.hmjiaxin.dao.common.UserDao;
import cn.hmjiaxin.model.User;
@Repository
public class UserDaoImpl {//implements UserDao  {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public List<User> getAll(){
		String sql= "select * from t_user";
		return jdbcTemplate.query(sql,new RowMapper<User>() {

			public User mapRow(ResultSet rs, int i) throws SQLException {
				User user=new User();
				user.setId(rs.getInt("id"));
				user.setUserName(rs.getString("user_name"));
				user.setUserPassword(rs.getString("user_password"));
				return user;
			}
		});
	}
	
//	@Override
	public User queryUserByName(String userName) {
		System.out.println(userName);
		String sql="select * from t_user where user_Name=?";
		List rows=jdbcTemplate.queryForList(sql,new Object[]{userName});
		System.out.println(rows.size());
		if(rows.size()>0){
			Map map=(Map) rows.get(0);
			System.out.println(map);
			System.out.println(map.get("user_name").toString());
			User user=new User();
			user.setUserName(map.get("user_name").toString());
			user.setUserPassword(map.get("user_password").toString());
			return user;
		}else{
			return new User();
		}
		/*jdbcTemplate.queryForRowSet(sql,new Object[]{userName},new RowMapper<User>(){
			public User mapRow(ResultSet rs, int i) throws SQLException {
				User user=new User();
				user.setId(rs.getInt("id"));
				user.setUserName(rs.getString("username"));
				user.setUserPassword(rs.getString("userpassword"));
				return user;
			}
		});
		return null;*/
	}
	

}
