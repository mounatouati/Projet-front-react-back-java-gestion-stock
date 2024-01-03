package com.example.interceptor;




import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.services.HistoriqueUtilisateurService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@Component
public class HistoriqueUtilisateurInterceptor implements HandlerInterceptor {

    @Autowired
   // private HistoriqueUtilisateurService historiqueUtilisateurService;
private static Logger log =LoggerFactory.getLogger(HistoriqueUtilisateurInterceptor.class);
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
  log.info("intercepteur prehandel");

        return HandlerInterceptor.super.preHandle(request, response, handler);
    }
	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("*******intercepteur posthandel");
		 log.info("intercepteur posthandel");
		HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
	}
	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		// TODO Auto-generated method stub
		System.out.println("*******intercepteur afterhandel");
		 log.info("intercepteur afterhandel");
		HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
	}

    
}
