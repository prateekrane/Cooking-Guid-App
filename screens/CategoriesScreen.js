import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native';

import CategoryGridTitle from '../components/CategoryGridTitle';



function renderCategoryItem(itemData) {
    return (
        <CategoryGridTitle title={itemData.item.title} color={itemData.item.color} onPress={presshandler} />
    );
}


function CategoriesScreen({ navigation }) {

    function renderCategoryItem(itemData) {
        function presshandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={presshandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    );

}

export default CategoriesScreen;