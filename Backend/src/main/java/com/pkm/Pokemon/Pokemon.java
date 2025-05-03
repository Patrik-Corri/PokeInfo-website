
package com.pkm.Pokemon; 
 
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="pokemon")
public class Pokemon {
	@Id
	@Column(name="name")
	private String name;
	private Integer number;
	private String type1;
	private String type2;
	private String color;
	private Integer generation;
	private Integer legendary; 
	private Integer mega; 
	private Double height;
	private Double weight;
	private Integer hp;
	private Integer atk;
	private Integer def;
	private Integer sp_atk;
	private Integer sp_def;
	private Integer spd;
	private Integer total;
	
	public Pokemon(String name) {
		this.name = name;
	}
	
	
	public Pokemon(String name, Integer number, String type1, String type2, String color, Integer generation, Integer legendary, Integer mega, Double height, Double weight, Integer hp, Integer atk, Integer def, Integer sp_atk, Integer sp_def, Integer spd, Integer total)
	{
		this.name = name;
		this.number = number;
		this.type1 = type1;
		this.type2 = type2; 
		this.color = color;
		this.generation = generation;
		this.legendary = legendary;
		this.mega = mega;
		this.height = height;
		this.weight = weight;
		this.hp = hp;
		this.atk = atk;
		this.def = def;
		this.sp_atk = sp_atk;
		this.sp_def = sp_def; 
		this.spd = spd;
		this.total = total;
		
	}
	
	public Pokemon()
	{
		
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getNumber() {
		return number;
	}
	public void setNumber(Integer number) {
		this.number = number;
	}
	public String getType1() {
		return type1;
	}
	public void setType1(String type1) {
		this.type1 = type1;
	}
	public String getType2() {
		return type2;
	}
	public void setType2(String type2) {
		this.type2 = type2;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public Integer getGeneration() {
		return generation;
	}
	public void setGeneration(Integer generation) {
		this.generation = generation;
	}
	public Integer getLegendary() {
		return legendary;
	}
	public void setLegendary(Integer legendary) {
		this.legendary = legendary;
	}
	public Integer getMega() {
		return mega;
	}
	public void setMega(Integer mega) {
		this.mega = mega;
	}
	public Double getHeight() {
		return height;
	}
	public void setHeight(Double height) {
		this.height = height;
	}
	public Double getWeight() {
		return weight;
	}
	public void setWeight(Double weight) {
		this.weight = weight;
	}
	public Integer getHp() {
		return hp;
	}
	public void setHp(Integer hp) {
		this.hp = hp;
	}
	public Integer getAtk() {
		return atk;
	}
	public void setAtk(Integer atk) {
		this.atk = atk;
	}
	public Integer getDef() {
		return def;
	}
	public void setDef(Integer def) {
		this.def = def;
	}
	public Integer getSp_atk() {
		return sp_atk;
	}
	public void setSp_atk(Integer sp_atk) {
		this.sp_atk = sp_atk;
	}
	public Integer getSp_def() {
		return sp_def;
	}
	public void setSp_def(Integer sp_def) {
		this.sp_def = sp_def;
	}
	public Integer getSpd() {
		return spd;
	}
	public void setSpd(Integer spd) {
		this.spd = spd;
	}
	public Integer getTotal() {
		return total;
	}
	public void setTotal(Integer total) {
		this.total = total;
	}
	
	
}
