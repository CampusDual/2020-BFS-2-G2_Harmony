package com.ontimize.harmony.api.core.service;

import java.util.List;
import java.util.Map;

import com.ontimize.db.EntityResult;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;

public interface ISongService {

		// SONG 
	public EntityResult songQuery(Map<String, Object> keyMap, List<String> attrList) throws OntimizeJEERuntimeException;

	public EntityResult songInsert(Map<String, Object> attrMap) throws OntimizeJEERuntimeException;

	public EntityResult songUpdate(Map<String, Object> attrMap, Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	
	public EntityResult songDelete(Map<String, Object> keyMap) throws OntimizeJEERuntimeException;
	
	public EntityResult newestSongs() throws OntimizeJEERuntimeException;

	public EntityResult searchSong(Map<String, Object> req) throws OntimizeJEERuntimeException;
}
