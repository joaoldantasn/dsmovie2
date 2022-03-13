package com.jldantas.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jldantas.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{

}
