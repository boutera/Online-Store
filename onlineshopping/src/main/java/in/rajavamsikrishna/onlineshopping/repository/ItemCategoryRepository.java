package in.rajavamsikrishna.onlineshopping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import in.rajavamsikrishna.onlineshopping.entity.ItemCategory;

public interface ItemCategoryRepository extends JpaRepository<ItemCategory, Long> {
	@Query(
			  value = "SELECT * FROM ItemCategory u WHERE u.item[].id = ?1", 
			  nativeQuery = true)
	
	public ItemCategory findByItemId(long id);
	
}
