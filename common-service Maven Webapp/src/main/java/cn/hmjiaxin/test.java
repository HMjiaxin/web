package cn.hmjiaxin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.hmjiaxin.util.StringUtil;

/**
 * Created by wenchao.ren on 2014/4/26.
 */
@Controller
@EnableAutoConfiguration
public class test {

	public static void main(String[] args) {
		String s=null;
		System.out.println(StringUtil.encodeMD5(s));
	}
}