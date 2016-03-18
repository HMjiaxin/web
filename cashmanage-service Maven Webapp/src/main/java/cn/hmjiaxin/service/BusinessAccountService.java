package cn.hmjiaxin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.hmjiaxin.dao.AccountDao;
import cn.hmjiaxin.model.BusinessAccount;
@Service
public class BusinessAccountService {
	private AccountDao accountDao;
	@Autowired
	public BusinessAccountService(AccountDao accountDao) {
		super();
		this.accountDao = accountDao;
	}

	public BusinessAccount findAccountById(int businessId) {
		BusinessAccount ba= accountDao.findByBusinessID(businessId);
		return ba;
	}

}
