package cn.hmjiaxin.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cn.hmjiaxin.model.User;
import cn.hmjiaxin.service.common.UserService;
import cn.hmjiaxin.util.StringUtil;

/**
 * 注册相关
 * 
 * @author wangchengang
 *
 */
@RestController
public class registerController {
	private UserService userService;

	@Autowired
	public registerController(UserService userService) {
		super();
		this.userService = userService;
	}

	@RequestMapping("/register")
	public void register(
			HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam("inputPhone") String inputPhone,
			// @RequestParam("inputNote") String inputNotev,
			@RequestParam("inputPassword") String inputPassword,
			@RequestParam("inputPeople") String inputPeople,
			@RequestParam("inputEmail") String inputEmail,
			@RequestParam("userType") String userType,
			@RequestParam(value = "inputQQ", required = false) String inputQQ) throws IOException {
		User u=userService.queryUserByPhone(inputPhone);
		response.setHeader("Content-type", "text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		if(u!=null){
			response.getWriter().print("该手机已被注册");
		}else{
		
		inputPassword=StringUtil.encodeMD5(inputPassword);
		User user=new User();
		user.setUserEmail(inputEmail);
		user.setUserName(inputPeople);
		user.setUserPassword(inputPassword);
		user.setUserPhone(inputPhone);
		user.setUserQQ(inputQQ);
		user.setUserType(userType);
		userService.addUser(user);
		}
		//http://localhost:8080/register?inputPhone=18801115417&inputPassword=123456&inputPeople=%E7%8E%8B%E6%99%A8%E5%88%9A&inputEmail=123@qq.com&inputQQ=123324
	}
	/**用户手机号验证
	 * @param userPhone
	 * @throws IOException 
	 */
	@RequestMapping("/checkUser")
	public void checkUserName(HttpServletRequest request,
			HttpServletResponse response,
			@RequestParam("inputPhone") String userPhone) throws IOException {
		response.setHeader("Content-type", "text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		User user = userService.queryUserByPhone(userPhone);
		if(user==null){
			response.getWriter().print(true);
		}else{
			response.getWriter().print(false);
		}
	}
}
