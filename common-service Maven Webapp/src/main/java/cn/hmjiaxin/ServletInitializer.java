package cn.hmjiaxin;

import org.springframework.boot.builder.SpringApplicationBuilder;  
import org.springframework.boot.context.web.SpringBootServletInitializer;  
  
public class ServletInitializer extends SpringBootServletInitializer {  
  
    @Override  
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {  
        return application.sources(ApplicationMain.class);  
    }  
  
} 