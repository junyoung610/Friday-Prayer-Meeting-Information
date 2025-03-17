const members = {
  건축위원회: [
    "김용남장로님, 홍순광집사님",
    "최은자권사님, 최은숙권사님",
    "손은아권사님, 전상수권사님",
    "김동현집사님, 정병선집사님",
    "김민수청년",
  ],
  바울전도회: [
    "김용남장로님, 정병선집사님",
    "홍순광짐사님, 김동현집사님",
    "송창완집사님, 조병삼집사님",
    "안재호성도님",
  ],
  한나전도회: [
    "전상수권사님, 노금자권사님",
    "정준경권사님, 장옥분권사님",
    "이숙영집사님, 최성례집사님",
  ],
  마리아전도회: [
    "손은아권사님, 최은숙권사님",
    "이정순권사님, 최은자권사님",
    "김명희집사님, 이숙현집사님",
  ],
  에스더전도회: [
    "정성숙권사님, 박현희집사님",
    "정윤정집사님, 최혜선집사님",
    "김향순집사님, 조아라성도님",
    "강유리성도님",
  ],
  한나에스더전도회: [
    "전상수권사님, 노금자권사님",
    "정준경권사님, 장옥분권사님",
    "이숙영집사님, 최성례집사님",
    "정성숙권사님, 박현희집사님",
    "정윤정집사님, 최혜선집사님",
    "김향순집사님, 조아라성도님",
    "강유리성도님",
  ],
  다니엘부: ["김민수청년, 정다운청년", "정다정성도님, 조희주성도님"],
  대학청년부: [
    "홍선규청년, 최윤재청년",
    "홍민규청년, 조현묵청년",
    "조동주청년, 허겸청년",
    "최서윤청년, 이도연청년",
    "김준영청년",
  ],
  중고등부: [
    "김동현선생님, 박현희선생님",
    "정다운선생님, 최윤재선생님",
    "홍민규선생님, 정나실학생",
    "이윤아학생, 이정아학생",
    "이세중학생",
  ],
  유초등부: [
    "김주혜선생님, 정성숙선생님",
    "조희주선생님, 이정순선생님",
    "김준영선생님, 안예준학생",
    "최빛학생, 최별학생",
    "이지아학생, 고유준학생",
    "송민하학생, 고유찬어린이",
  ],
};

function updateMembers() {
  const date = document.getElementById("date").value;
  const leader = document.getElementById("leader").value;
  const resultDiv = document.getElementById("result");

  if (!date || !leader) {
    resultDiv.innerHTML = "<p>날짜와 주관을 선택하세요.</p>";
    return;
  }

  const formattedDate = new Date(date);
  const month = formattedDate.getMonth() + 1;
  const day = formattedDate.getDate();

  const memberList = members[leader] || [];
  const memberHtml = memberList.map((member) => `${member}<br>`).join("");

  resultDiv.innerHTML = `
            <p>📍 금요기도회 안내 / ${date.replace(/-/g, ".")} (금)</p>
            <p>${month}월 ${day}일 금요기도회는 "${leader}" 주관입니다.!</br>
            아래의 항목을 보내주시면 감사하겠습니다!<br>
            [대표기도, 기도제목(나라, 교회, 주관), 개인기도제목, 싱어]</p>
            <p>※ 싱어는 준비찬양 전달을 위해 ‘월요일’까지 부탁드리며,<br>대표기도, 기도제목은 ‘화요일 오후’으로 부탁드립니다!</p>
            <p>주보 최종 마감은 목요일 오후입니다.<br>최대한 기간에 보내주시면 감사하겠습니다.!</p>
            <p>아래는 요람의 ${leader} 회원입니다.</p>
            ${memberHtml}
            <p>복 된 하루 보내세요~!<br>감사합니다 🙏🏻</p>
        `;
}

function copyToClipboard() {
  const resultDiv = document.getElementById("result");
  const textToCopy = resultDiv.innerText;
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("복사되었습니다!");
}
