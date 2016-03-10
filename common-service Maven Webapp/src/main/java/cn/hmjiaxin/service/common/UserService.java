package cn.hmjiaxin.service.common;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;

import cn.hmjiaxin.dao.common.UserDao;
import cn.hmjiaxin.model.User;

@Service
@EnableAutoConfiguration
public class UserService {
	private UserDao userDao;

	@Autowired
	public UserService(UserDao userDao) {
		super();
		this.userDao = userDao;
	}
	public List<User> getAll() {
		return (List<User>) userDao.findAll();
		
	}

	public User queryUserByName(String userName) {
		User user=userDao.findByUserName(userName);
		return user;
	}
}
