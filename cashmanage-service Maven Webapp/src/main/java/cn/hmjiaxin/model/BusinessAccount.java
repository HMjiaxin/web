package cn.hmjiaxin.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.jmx.snmp.Timestamp;

@Entity
@Table(name = "qa_business_account")
public class BusinessAccount implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	private int id;
	@Column(name="business_id")
	private int businessID;
	private BigDecimal score;
	@Column(name = "media_score")
	private BigDecimal mediaScore;
	@Column(name = "ad_score")
	private BigDecimal adScore;
	@Column(name = "created_date")
	private Date createdDate;
	@Column(name = "last_updated_date")
	private Date lastUpdatedDate;

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

	public BigDecimal getScore() {
		return score;
	}

	public void setScore(BigDecimal score) {
		this.score = score;
	}

	public BigDecimal getMediaScore() {
		return mediaScore;
	}

	public void setMedia_score(BigDecimal mediaScore) {
		this.mediaScore = mediaScore;
	}

	public BigDecimal getAdScore() {
		return adScore;
	}

	public void setAdScore(BigDecimal adScore) {
		this.adScore = adScore;
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
		this.lastUpdatedDate = lastUpdatedDate;
	}

}
