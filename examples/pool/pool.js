export default class Pool {
    constructor (scene, entities) {
        this._group = scene.add.group();
        this._group.addMultiple(entities);
        this._group.children.iterate(c => {
            c.setActive(false);
            c.setVisible(false);
        });
    }
    
    spawn (x, y) {
        let entity = this._group.getFirstDead();
        if (entity) {
            entity.x = x;
            entity.y = y;
            entity.setActive(true);
            entity.setVisible(true);
        }
        return entity;
    }
    
    release (entity) {
        this._group.killAndHide(entity);
    }
}