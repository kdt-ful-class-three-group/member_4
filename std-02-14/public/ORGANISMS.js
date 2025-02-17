import { STATE } from "./STATE.js";
import { ATOMS } from "./ATOMS.js";
import { MOLECULES } from "./MOLECULES.js";
import { ELEMENTS } from "./ELEMENTS.js";
import { STUDENTS } from "./obj/STUDENTS.js";
import { MODELS } from "./MODELS.js";
import { CONTROLLERS } from "./CONTROLLERS.js";
export const ORGANISMS = {
    renderStudentList: function () {
        ATOMS.clear(ELEMENTS.itemList);
        ELEMENTS.itemList.appendChild(
            MODELS.studentListModel(STUDENTS, function (student) {
                STATE.selectedStudent = student;
                ORGANISMS.renderStudentDetail(student);
            })
        );
    },
    renderStudentDetail: function (student) {
        ATOMS.clear(ELEMENTS.studentDetail);
        ELEMENTS.studentDetail.appendChild(
            MODELS.studentDetailModel(
                student,
                function (category) {
                    STATE.modalMode = "add";
                    STATE.modalCategory = category;
                    STATE.modalIndex = null;
                    CONTROLLERS.openModal();
                },
                function (category, index) {
                    STATE.modalMode = "edit";
                    STATE.modalCategory = category;
                    STATE.modalIndex = index;
                    CONTROLLERS.openModal();
                }
            )
        );
    },
    renderModifiedList: function () {
        ATOMS.clear(ELEMENTS.modifiedList);
        ELEMENTS.modifiedList.appendChild(
            MODELS.modifiedListModel(STATE.modified)
        );
        ATOMS.clear(ELEMENTS.jsonButtonContainer);
        if (Object.keys(STATE.modified).length > 0) {
            const jsonBtn = MOLECULES.createButton(
                "JSON 저장하기",
                "btn btn-primary",
                null
            );
            jsonBtn.addEventListener("click", function () {
                CONTROLLERS.downloadJSON();
            });
            ELEMENTS.jsonButtonContainer.appendChild(jsonBtn);
        }
    },
    renderModal: function (contentFragment) {
        ATOMS.clear(ELEMENTS.modalOverlay);
        ELEMENTS.modalOverlay.appendChild(contentFragment);
        ELEMENTS.modalOverlay.classList.add("active");
    },
};
