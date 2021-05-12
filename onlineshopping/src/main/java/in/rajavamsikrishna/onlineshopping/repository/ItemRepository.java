package in.rajavamsikrishna.onlineshopping.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import in.rajavamsikrishna.onlineshopping.entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
	@Query("SELECT i FROM Item i WHERE i.category.id=?1 ")
	
	public List<Item> findByCategoryId(Long id);
	
	

@Query("SELECT i FROM Item i WHERE i.name LIKE %?1%")
	
	public List<Item> findByKeyword(String keyword);




}

