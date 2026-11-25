/**
 * KHO DỮ LIỆU BÀI GIẢNG RĂNG HÀM MẶT - ODONTOHUB
 * 
 * Hướng dẫn thêm bài mới:
 * Mỗi bài giảng là một khối { ... } nằm trong dấu ngoặc vuông của mảng LESSONS.
 * Khi AI xuất bài mới từ sách PDF, chỉ cần dán khối { ... } đó vào ngay dưới dòng "DÁN BÀI GIẢNG MỚI Ở ĐÂY".
 * 
 * Danh sách mã chuyên ngành (specialty) hợp lệ:
 * - 'pt-ham-mat'        : Phẫu thuật Miệng & Hàm Mặt
 * - 'chua-rang-noi-nha' : Chữa răng & Nội nha
 * - 'phuc-hinh'         : Phục hình Răng
 * - 'nha-chu'           : Nha chu học
 * - 'chinh-nha'         : Chỉnh hình Răng Mặt
 * - 'rang-tre-em'       : Răng Trẻ Em & Dự phòng
 * - 'implant'           : Cấy ghép Nha khoa
 */

const LESSONS = [
  // =========================================================================
  // DÁN BÀI GIẢNG MỚI Ở ĐÂY (Bên dưới dòng này)
  // =========================================================================

  {
    id: 'wisdom-tooth-class',
    specialty: 'pt-ham-mat',
    title: 'Phân loại răng khôn hàm dưới mọc lệch (Pell & Gregory và Winter)',
    chapter: 'Chương 9 — Nhổ răng ngầm & Răng mọc lệch',
    book: 'Contemporary Oral and Maxillofacial Surgery (Hupp)',
    hasDiagram: true,
    tags: ['Răng khôn', 'Pell & Gregory', 'Winter', 'Phẫu thuật miệng', 'Nhổ răng lệch'],
    summary: 'Hệ thống phân loại kinh điển giúp đánh giá mức độ khó khi phẫu thuật nhổ răng khôn hàm dưới dựa trên tương quan với bờ trước cành lên xương hàm dưới, mặt phẳng nhai răng kế cận và trục nghiêng của răng.',
    keyPoints: [
      'Phân loại Winter dựa vào góc trục răng 8 so với trục răng 7: Lệch gần (thường gặp nhất ~43%), thẳng đứng (~38%), nằm ngang (~3%), lệch xa (~6%).',
      'Pell & Gregory theo cành lên (Loại I, II, III): Đánh giá khoảng trống từ mặt xa R7 đến bờ trước cành lên xương hàm dưới so với đường kính gần-xa thân R8.',
      'Pell & Gregory theo độ sâu (Vị trí A, B, C): So sánh điểm cao nhất của R8 với mặt phẳng nhai và đường cổ răng của R7.',
      'Tiên lượng khó tăng cao khi R8 ở Vị trí C, Loại III, lệch xa hoặc chân răng ôm sát/xâm lấn ống thần kinh xương ổ dưới.'
    ],
    customHtml: `
      <div class="my-6 bg-slate-50 border border-slate-200 rounded-xl p-5">
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold uppercase tracking-wider text-dental-700">Sơ đồ minh họa tương quan giải phẫu</span>
          <span class="text-xs text-slate-400">Chuẩn hóa từ Hupp & Peterson</span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg border border-slate-200 flex flex-col items-center">
            <svg viewBox="0 0 320 200" class="w-full max-w-[300px] h-auto">
              <path d="M 30 160 L 210 160 Q 245 160 255 120 L 275 30 L 300 30 L 280 140 Q 270 185 215 185 L 30 185 Z" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
              <line x1="20" y1="95" x2="290" y2="95" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="4 4"/>
              <text x="22" y="88" font-size="10" fill="#0284c7" font-weight="600">Mặt phẳng nhai (Mức A)</text>
              <line x1="20" y1="130" x2="290" y2="130" stroke="#0d9488" stroke-width="1.5" stroke-dasharray="4 4"/>
              <text x="22" y="143" font-size="10" fill="#0d9488" font-weight="600">Đường cổ răng R7 (Mức B-C)</text>
              <g transform="translate(85, 95)">
                <rect x="0" y="0" width="34" height="35" rx="6" fill="#ffffff" stroke="#334155" stroke-width="2"/>
                <path d="M 5 35 L 2 70 L 14 70 L 17 42 L 20 70 L 32 70 L 29 35 Z" fill="#e2e8f0" stroke="#334155" stroke-width="1.5"/>
                <text x="17" y="21" text-anchor="middle" font-size="11" font-weight="bold" fill="#334155">R7</text>
              </g>
              <g transform="translate(155, 112) rotate(-38)">
                <rect x="0" y="0" width="32" height="32" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                <path d="M 5 32 L 4 62 L 15 62 L 16 38 L 17 62 L 28 62 L 27 32 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5"/>
                <text x="16" y="20" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">R8</text>
              </g>
              <line x1="262" y1="60" x2="245" y2="165" stroke="#e11d48" stroke-width="1.5" stroke-dasharray="3 3"/>
              <text x="180" y="55" font-size="10" fill="#e11d48" font-weight="600">Bờ trước cành lên</text>
            </svg>
            <p class="text-xs font-medium text-slate-600 mt-2 text-center">Hình 1: R8 lệch gần (Winter), Vị trí B – Loại II (Pell & Gregory)</p>
          </div>
          <div class="bg-white p-4 rounded-lg border border-slate-200 flex flex-col justify-center">
            <h4 class="text-xs font-bold text-slate-800 uppercase mb-2">Ma trận đánh giá độ khó lâm sàng</h4>
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-slate-100 text-slate-700">
                  <th class="p-2 border border-slate-200">Tiêu chí</th>
                  <th class="p-2 border border-slate-200">Thuận lợi (1đ)</th>
                  <th class="p-2 border border-slate-200">Khó (3-4đ)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2 border border-slate-200 font-medium">Trục răng</td>
                  <td class="p-2 border border-slate-200 text-teal-700">Lệch gần</td>
                  <td class="p-2 border border-slate-200 text-rose-600">Lệch xa / Ngang</td>
                </tr>
                <tr>
                  <td class="p-2 border border-slate-200 font-medium">Độ sâu</td>
                  <td class="p-2 border border-slate-200 text-teal-700">Vị trí A</td>
                  <td class="p-2 border border-slate-200 text-rose-600">Vị trí C</td>
                </tr>
                <tr>
                  <td class="p-2 border border-slate-200 font-medium">Cành lên</td>
                  <td class="p-2 border border-slate-200 text-teal-700">Loại I</td>
                  <td class="p-2 border border-slate-200 text-rose-600">Loại III</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `,
    quiz: {
      question: 'Theo phân loại Pell & Gregory, răng khôn hàm dưới có điểm cao nhất nằm dưới mặt phẳng nhai của R7 nhưng vẫn nằm trên đường cổ răng R7, và một nửa thân răng nằm trong bờ trước cành lên được xếp vào nhóm nào?',
      options: [
        'Loại I, Vị trí A',
        'Loại II, Vị trí B',
        'Loại II, Vị trí C',
        'Loại III, Vị trí B'
      ],
      answer: 1,
      explanation: 'Điểm cao nhất nằm giữa mặt phẳng nhai và đường cổ răng R7 là Vị trí B; khoảng trống cành lên chỉ đủ một phần thân răng (một nửa nằm trong cành lên) là Loại II.'
    }
  },

  {
    id: 'endodontic-working-length',
    specialty: 'chua-rang-noi-nha',
    title: 'Xác định chiều dài làm việc & Giải phẫu vùng chóp chân răng',
    chapter: 'Chương 6 — Sửa soạn hệ thống ống tủy',
    book: 'Pathways of the Pulp (Cohen)',
    hasDiagram: true,
    tags: ['Nội nha', 'Chiều dài làm việc', 'Thắt chóp', 'Apex locator'],
    summary: 'Nguyên tắc xác định điểm kết thúc lý tưởng của quá trình sửa soạn và trám bít ống tủy tại vị trí thắt chóp (apical constriction), cách chóp giải phẫu khoảng 0.5 – 1.0 mm.',
    keyPoints: [
      'Thắt chóp (Minor diameter): Điểm hẹp nhất của ống tủy, thường trùng hoặc nằm sát ranh giới ngà - xê măng (CDJ).',
      'Lỗ chóp (Major diameter): Nơi mạch máu thần kinh đi vào, thường lệch bên so với đỉnh chóp giải phẫu trên phim X-quang.',
      'Kết hợp máy định vị chóp điện tử (EAL) thế hệ mới và phim X-quang cho độ chính xác > 95%.'
    ],
    quiz: {
      question: 'Điểm kết thúc lý tưởng của quá trình sửa soạn và trám bít ống tủy nằm ở vị trí giải phẫu nào?',
      options: [
        'Đỉnh chóp giải phẫu (Anatomic apex)',
        'Lỗ chóp lớn (Major apical foramen)',
        'Vị trí thắt chóp (Apical constriction / Minor diameter)',
        'Cách đỉnh chóp trên X-quang đúng 2.5 mm'
      ],
      answer: 2,
      explanation: 'Thắt chóp (minor diameter) là nơi hẹp nhất của ống tủy, giúp tạo nút chặn tự nhiên cho vật liệu trám bít và giảm thiểu tổn thương mô quanh chóp.'
    }
  },

  {
    id: 'crown-preparation-principles',
    specialty: 'phuc-hinh',
    title: 'Nguyên tắc sinh học và cơ học trong sửa soạn cùi răng cố định',
    chapter: 'Chương 7 — Principles of Tooth Preparation',
    book: 'Fundamentals of Fixed Prosthodontics (Shillingburg)',
    hasDiagram: true,
    tags: ['Phục hình cố định', 'Mão răng', 'Đường hoàn tất', 'Độ thuôn'],
    summary: 'Cân bằng giữa việc bảo tồn mô răng lành mạnh, đảm bảo lưu giữ - kháng sút (góc hội tụ 6°–10°) và thiết kế đường hoàn tất phù hợp từng loại vật liệu phục hình.',
    keyPoints: [
      'Tổng góc hội tụ (TOC) lý tưởng của hai thành đối diện là 6° đến 10°; chiều cao cùi tối thiểu 3mm cho răng cửa và 4mm cho răng hàm.',
      'Đường hoàn tất bờ cong (Chamfer) chỉ định cho mão kim loại toàn diện hoặc mão sứ-kim loại mặt lưỡi.',
      'Đường hoàn tất bờ vai (Shoulder) hoặc bờ cong sâu (Deep Chamfer) bắt buộc cho phục hình toàn sứ (Zirconia, Lithium Disilicate) để chống nứt vỡ bờ.'
    ],
    quiz: {
      question: 'Tổng góc hội tụ (Total Occlusal Convergence) tối ưu nhất giữa hai thành trục đối diện của cùi răng là bao nhiêu?',
      options: [
        '0° – 2° (song song tuyệt đối)',
        '6° – 10°',
        '20° – 25°',
        '30° – 35°'
      ],
      answer: 1,
      explanation: 'Góc hội tụ 6°–10° vừa đảm bảo lưu giữ cơ học tối đa vừa giúp thoát lực cản thủy tĩnh của xi măng gắn khi lắp phục hình.'
    }
  },

  {
    id: 'periodontal-classification-2017',
    specialty: 'nha-chu',
    title: 'Phân loại Bệnh Nha chu & Quanh Implant (AAP / EFP 2017)',
    chapter: 'Chương 4 — Classification of Periodontal Diseases',
    book: 'Carranza’s Clinical Periodontology',
    hasDiagram: true,
    tags: ['Nha chu', 'AAP 2017', 'Giai đoạn', 'Mức độ', 'CAL'],
    summary: 'Hệ thống phân loại hiện hành thay thế cách chia mạn tính/tấn công cũ bằng ma trận 4 Giai đoạn (Stage I–IV dựa trên mức độ trầm trọng) và 3 Mức độ tiến triển (Grade A, B, C).',
    keyPoints: [
      'Stage I: Mất bám dính lâm sàng (CAL) vùng kẽ răng tối đa 1–2 mm, tiêu xương < 15% (1/3 cổ).',
      'Stage II: CAL vùng kẽ 3–4 mm, tiêu xương 15%–33%, không có răng mất do viêm nha chu.',
      'Stage III & IV: CAL ≥ 5 mm, tiêu xương quá 1/3 giữa/chóp; Stage III mất ≤ 4 răng, Stage IV mất ≥ 5 răng kèm rối loạn chức năng nhai.',
      'Grade A, B, C đánh giá tốc độ tiến triển dựa vào tỷ lệ % tiêu xương / tuổi bệnh nhân và yếu tố nguy cơ (hút thuốc, HbA1c).'
    ],
    quiz: {
      question: 'Bệnh nhân có mất bám dính lâm sàng vùng kẽ 6 mm, tiêu xương đến 1/3 chóp và đã mất 2 răng do viêm nha chu được xếp vào giai đoạn nào?',
      options: [
        'Stage I',
        'Stage II',
        'Stage III',
        'Stage IV'
      ],
      answer: 2,
      explanation: 'CAL ≥ 5 mm kèm mất từ 1 đến 4 răng do bệnh nha chu thuộc Stage III (nếu mất từ 5 răng trở lên mới xếp vào Stage IV).'
    }
  }
];
