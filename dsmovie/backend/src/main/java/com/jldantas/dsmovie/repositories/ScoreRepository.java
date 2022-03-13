package com.jldantas.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jldantas.dsmovie.entities.Score;
import com.jldantas.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{

}
