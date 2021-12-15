export default class SkillsView {
    skillsSection = document.querySelector('.skills-list');
    addForm = document.querySelector('#add-new-skill');

    getSkillName() {
        return document.querySelector("input[name=name]").value.trim();
    }

    getSkillValue() {
        return document.querySelector("input[name=value]").value.trim();
    }

    drawNewSkill(name, value, id) {
        const newSkill = document.createElement("div");
        newSkill.className = "skill skill_" + id

        let description = document.createElement("div");
        description.className = "skill_description";
        let pName = document.createElement("p");
        pName.className = "skill_name";
        pName.textContent = name;
        let pValue = document.createElement("p");
        pValue.className = "skill_percentage"
        pValue.textContent = value;
        description.appendChild(pName);
        description.appendChild(pValue)

        newSkill.appendChild(description);

        let content = document.createElement("div");
        content.className = "skill_content";
        let bar = document.createElement("div");
        bar.className = "skill_bar";
        let barValue = document.createElement("div");
        barValue.className = "skill_bar-value";
        barValue.style.width = value + "%";
        bar.appendChild(barValue);
        content.appendChild(bar);
        let button = document.createElement("button");
        button.className = "skill-button"
        button.textContent = "x"
        content.appendChild(button);

        newSkill.appendChild(content);

        this.skillsSection.appendChild(newSkill);
    }

    cutAwaySkillById(id) {
        const removeSkill = this.skillsSection.querySelector(".skill_" + id);
        removeSkill.remove();
    }

}