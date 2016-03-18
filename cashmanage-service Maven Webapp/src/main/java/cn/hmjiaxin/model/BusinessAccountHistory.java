package cn.hmjiaxin.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.jmx.snmp.Timestamp;

@Entity
@Table(name = "qa_business_account_history")
public class BusinessAccountHistory implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	@Column(name = "business_id")
	private int businessID;
	@Column(name = "user_id")
	private int userID;
	@Column(name = "score")
	private BigDecimal score;
	@Column(name = "description")
	private String description;
	@Column(name = "status")
	private int status;
	@Column(name = "ip")
	private String ip;
	@Column(name = "created_date")
	private Date createdDate;
	@Column(name = "last_updated_date")
	private Date lastUpdatedDate;

	SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getBusinessID() {
		return businessID;
	}

	public void setBusinessID(int businessID) {
		this.businessID = businessID;
	}

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public BigDecimal getScore() {
		return score;
	}

	public void setScore(BigDecimal score) {
		this.score = score;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getLastUpdatedDate() {
		return lastUpdatedDate;
	}

	public void setLastUpdatedDate(Date lastUpdatedDate) {
//		lastUpdatedDate=lastUpdatedDate.;
		this.lastUpdatedDate = lastUpdatedDate;
	}

}
