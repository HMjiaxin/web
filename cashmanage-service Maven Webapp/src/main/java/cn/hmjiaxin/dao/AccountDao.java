package cn.hmjiaxin.dao;

import org.springframework.data.repository.CrudRepository;

import cn.hmjiaxin.model.BusinessAccount;

public interface AccountDao extends CrudRepository<BusinessAccount, Long>{

	BusinessAccount findByBusinessID(int businessId);

}
