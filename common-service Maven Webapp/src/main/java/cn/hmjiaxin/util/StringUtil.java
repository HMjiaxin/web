package cn.hmjiaxin.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import sun.misc.BASE64Encoder;


public class StringUtil {
	private static MessageDigest digest = null;
	/**
	 * md5加密
	 * @param message
	 * @return
	 */
	public static String encodeMD5(String message){  
	    if(message==null){
	    	return "";
	    }
		try {  
	      MessageDigest md = MessageDigest.getInstance("md5");  
	      byte md5[] = md.digest(message.getBytes());  
	        
	      BASE64Encoder encoder = new BASE64Encoder();  
	      return encoder.encode(md5);  
	    } catch (NoSuchAlgorithmException e) {  
	      throw new RuntimeException(e);  
	    }  
	  } 
	
	/*public synchronized static final String hash(String data) {
		if (digest == null) {
			try {
				digest = MessageDigest.getInstance("MD5");
			} catch (NoSuchAlgorithmException nsae) {
				throw new StringUtilsException("Failed to load the MD5 MessageDigest.",nsae);
			}
		}
		digest.update(data.getBytes());
		return encodeHex(digest.digest());
	}
	public static final String encodeHex(byte[] bytes) {
		StringBuffer buf = new StringBuffer(bytes.length * 2);
		int i;
		for (i = 0; i < bytes.length; i++) {
			if (((int) bytes[i] & 0xff) < 0x10) {
				buf.append("0");
			}
			buf.append(Long.toString((int) bytes[i] & 0xff, 16));
		}
		return buf.toString();
	}
	
	static class StringUtilsException extends RuntimeException {
		public StringUtilsException(String message,Exception e) {
			super(message,e);
		}
	}*/
	
}
